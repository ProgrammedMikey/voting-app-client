import {FETCH_POST,ADD_POST,POST_SHOW,FETCH_POST_SUCCESS,
    POST_SHOW_SUCCESS,UPDATE_POST_SUCCESS,USER_INFO,USER_INFO_SUCCESS} from '../actions/types';

const INITIAL_STATE = {
    postsList:{posts:[],error:null,loading:false},
    newPost:{post:null,error:null,loading:false},
    activePost:{post:[],error:null,loading:false}
};


export default function (state = INITIAL_STATE,action){
    switch (action.type) {
      case FETCH_POST:
        return { ...state, postsList:{posts:[],error:null,loading:true}};     
      case FETCH_POST_SUCCESS:
        return { ...state, postsList:{posts:action.payload.data,error:null,loading:false}};
      case POST_SHOW:
        return {...state,activePost:{post:[],error:null,loading:true}};
      case POST_SHOW_SUCCESS:
        return {...state,activePost:{post:action.payload.data,error:null,loading:false}};
      case UPDATE_POST_SUCCESS:
        return { ...state, updatePost:{post:true,error:null,loading:false}};     
      default:
        return state;
    }
}

