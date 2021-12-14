package me.acarbajo.library.redux.types

interface MiddlewareAPI<D : Dispatch<Action>, S : State> {
    val dispatch: D
    fun getState(): S
}

fun interface Middleware<S : State, D : Dispatch<Action>> {
    operator fun invoke(api: MiddlewareAPI<D, S>, next: Dispatch<Action>, action: Action): Action
}