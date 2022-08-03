import { RootState } from './../store';
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { useSelector } from 'react-redux';

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector