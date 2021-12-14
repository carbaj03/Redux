package me.acarbajo.library.redux

import me.acarbajo.library.redux.types.Reducer
import me.acarbajo.library.redux.types.State

fun <S : State> combineReducers(
    vararg reducers: Reducer<S>
): Reducer<S> =
    Reducer { state, action ->
        reducers.fold(state) { s, reducer -> reducer(s, action) }
    }

fun <S : State> combineReducers(
    reducers: List<Reducer<S>>
): Reducer<S> =
    Reducer { state, action ->
        reducers.fold(state) { s, reducer -> reducer(s, action) }
    }