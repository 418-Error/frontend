import {createAsyncThunk, createEntityAdapter, createSelector, createSlice} from "@reduxjs/toolkit";
import {QuestionEntity, QuestionState} from "@draco/interfaces";
import {apiClient} from "@draco/api-client";
import {RootState} from "@draco/store";

export const QUESTIONS_KEY = 'question'

export const questionsAdapter = createEntityAdapter<QuestionEntity>()

export const fetchQuestions = createAsyncThunk('questions/fetch', async () => {
  const response = await apiClient.get<QuestionEntity[]>('/questions').build()

  return response.data

})

export const initialQuestionState: QuestionState = questionsAdapter.getInitialState({
  loadingStatus: 'not loaded',
  error: null,
})

export const questionSlice = createSlice({
  name: QUESTIONS_KEY,
  initialState: initialQuestionState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state, action) => {
        state.loadingStatus = 'loading'
      })
      .addCase(fetchQuestions.fulfilled, (state: QuestionState, action) => {
        questionsAdapter.upsertMany(state, action.payload)
        state.loadingStatus = 'loaded'
      })
  }
})

export const questionsReducer = questionSlice.reducer
export const questionsActions = questionSlice.actions

const { selectAll } = questionsAdapter.getSelectors()

export const getQuestionState = (rootState: RootState): QuestionState => rootState['question']

export const selectAllQuestions = createSelector(getQuestionState, selectAll)

