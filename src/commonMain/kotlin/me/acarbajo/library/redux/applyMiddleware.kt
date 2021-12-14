package me.acarbajo.library.redux

import kotlinx.coroutines.flow.StateFlow
import me.acarbajo.library.redux.types.*

fun <S : State> applyMiddleware(
    vararg middlewares: Middleware<S, Dispatch<Action>>
): StoreEnhancer<S> =
    StoreEnhancer { createStore ->
        StoreEnhancerStoreCreator { reducer, initialState ->
            val store = createStore(reducer, initialState)
            var dispatch: Dispatch<Action> = Dispatch {
                throw  Throwable(
                    "Dispatching while constructing your middleware is not allowed. " +
                            "Other middleware would not be applied to this dispatch."
                )
            }
            val middlewareAPI: MiddlewareAPI<Dispatch<Action>, S> = object : MiddlewareAPI<Dispatch<Action>, S> {
                override val dispatch: Dispatch<Action> = Dispatch { dispatch(it) }
                override fun getState(): S = store.state.value
            }

            dispatch = middlewares.foldRight(store.dispatch) { middleware, dispatcher ->
                Dispatch { middleware(middlewareAPI, dispatcher, it) }
            }
            object : Store<S> {
                override val dispatch: Dispatch<Action> = dispatch
                override val state: StateFlow<S> = store.state
            }
        }
    }