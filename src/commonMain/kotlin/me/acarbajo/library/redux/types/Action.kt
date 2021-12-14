package me.acarbajo.library.redux.types

interface Action

fun interface AsyncAction<S : State> : Action {
    operator fun invoke(
        state: S,
        dispatcher: Dispatch<Action>,
    )
}

typealias Thunk = AsyncAction<CombineState>