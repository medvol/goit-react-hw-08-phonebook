import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from './filterSlice';
import { LabelFilter, FilterInput } from './Filter.styled';


export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state=> state.filter)
    return (
        <LabelFilter htmlFor="filter">
            Find contacts by name:
            <FilterInput type="text" name="filter" value={filter } onChange={(event)=> dispatch(setFilter(event.target.value))} />
        </LabelFilter>
    )
}

