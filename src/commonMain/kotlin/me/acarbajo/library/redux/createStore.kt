package me.acarbajo.library.redux

import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import me.acarbajo.library.redux.types.*

fun <S : State> createStore(
    reducer: Reducer<S>,
    preloadedState: S,
    enhancer: StoreEnhancer<S>? = null,
): Store<S> {
    if (enhancer != null) {
        return enhancer { r, initialState -> createStore(r, initialState, null) }(
            reducer,
            preloadedState
        )
    }

    val currentState: MutableStateFlow<S> = MutableStateFlow(preloadedState)

    val dispatch: Dispatch<Action> = Dispatch { action ->
        currentState.value = reducer(currentState.value, action)
        action
    }

    return object : Store<S> {
        override val dispatch: Dispatch<Action> = dispatch
        override val state: StateFlow<S> = currentState
    }
}
