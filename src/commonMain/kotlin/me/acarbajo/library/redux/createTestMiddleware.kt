package me.acarbajo.library.redux

import kotlinx.coroutines.flow.StateFlow
import me.acarbajo.library.redux.types.*

fun <S : State> createTestMiddleware(actions: MutableList<Action>): Middleware<S, Dispatch<Action>> =
    Middleware { _, next, action ->
        if (action !is AsyncAction<*>)
            actions.add(action)
        next(action)
    }

interface MockStore<S : State> : Store<S> {
    val actions: List<Action>
}

fun mockStore(slice: Slice<*>): MockStore<CombineState> =
    object : MockStore<CombineState> {
        private var temp = mutableListOf<Action>()
        private val store = configureStore(slice, middleware = arrayOf(createTestMiddleware(temp)))

        override val dispatch: Dispatch<Action>
            get() = store.dispatch

        override val state: StateFlow<CombineState>
            get() = store.state

        override val actions: List<Action>
            get() = temp
    }