package me.acarbajo.library.redux.types

fun <S : State> createThunkMiddleware() =
    Middleware<S, Dispatch<Action>> { store, next, action ->
        if (action is AsyncAction<*>) {
            (action as AsyncAction<S>)(
                state = store.getState(),
                dispatcher = next
            )
        }
        next(action)
    }
