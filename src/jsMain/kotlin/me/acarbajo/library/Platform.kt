package me.acarbajo.library

import me.acarbajo.library.redux.Slice
import me.acarbajo.library.redux.types.Action
import me.acarbajo.library.redux.types.CombineState
import me.acarbajo.library.redux.types.Reducer
import me.acarbajo.library.redux.types.State

actual class Platform actual constructor() {
    actual val platform: String
        get() = TODO("Not yet implemented")
}

inline fun <reified S : State, reified A : Action> createSlice(
    initialState: S,
    crossinline extra: (S, Action) -> S = { s, _ -> s },
    crossinline r: (S, A) -> S = { s, _ -> s }
): Slice<S> =
    object : Slice<S> {
        override val name: String = S::class.simpleName!!
        override val reducer: Pair<String, Reducer<State>> = name to Reducer<S, A> { state, action -> r(state, action) }
        override val initialState: Pair<String, S> = name to initialState
        override val extraReducer: Pair<String, Reducer<State>> =
            name to Reducer<S, Action> { state, action -> extra(state, action) }
    }

fun <S : State> CombineState.select(slice: Slice<S>): S =
    states[slice.name] as S

/*
@Composable
fun <A, S : State> Store<CombineState>.useSelect(slice: Slice<S>, f: S.() -> A): androidx.compose.runtime.State<A> =
    state.map { f(state.value.select(slice)) }.collectAsState(initial = f(state.value.select(slice)))

fun <S : State> createAction(slice: Slice<S>, f: (S, Dispatch<Action>) -> Unit): Thunk =
    Thunk { states, dispatcher -> f(states.select(slice), dispatcher) }
*/