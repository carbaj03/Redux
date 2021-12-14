package me.acarbajo.library.redux.types

import kotlinx.coroutines.flow.StateFlow

fun interface Dispatch<A : Action> {
    operator fun invoke(action: A): A
}

interface State

interface CombineState : State {
    val states: MutableMap<String, State>
}

interface Store<S : State> {
    val dispatch: Dispatch<Action>
    val state: StateFlow<S>
}

fun interface StoreEnhancer<S : State> {
    operator fun invoke(next: StoreEnhancerStoreCreator<S>): StoreEnhancerStoreCreator<S>
}

fun interface StoreEnhancerStoreCreator<S : State> {
    operator fun invoke(
        reducer: Reducer<S>,
        preloadedState: S
    ): Store<S>
}