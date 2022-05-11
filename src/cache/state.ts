import { makeAutoObservable } from "mobx";


export default class State {
    constructor() {
        makeAutoObservable(this)
    }
}
