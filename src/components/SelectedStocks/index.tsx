import { faPlus } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { useGraphContext } from '../../contexts/GraphContext';
import { SearchContextProvider, useSearchContext } from '../../contexts/SearchContext';
import { StockCandle } from '../../typings/stock';
import Badge from '../Badge';
import SearchBar from '../SearchBar';

interface SelectedStocksProps {

}

interface RemoveBadgeProps {
  text: string,
  color: 'action' | 'danger',
  onRemove: () => void
}

const RemoveBadge = ({
  text,
  onRemove
} : RemoveBadgeProps) => {
  return (
    <Badge color={"action"}>
      {text}
      <span onClick={onRemove} className="badge-remove" />
    </Badge>
  )
}

const SelectedStocks: React.FC = () => {

  const { term } = useSearchContext();
  const {graphs, addGraph, removeGraph} = useGraphContext();

  const handleSelect = () => {
    addGraph(term);
  }

  return (
    <>
      <div className="selected-stocks">
        <div className="selected-stocks-badges">
          <Badge color='danger'>
            LIMPAR
          </Badge>
          {graphs.map((badge) => {
            return (
              <RemoveBadge color={"action"} text={badge.name} onRemove={() => {removeGraph(badge.name)}} />
            )
          })}
        </div>
        <SearchBar icon={faPlus} onSelect={handleSelect} />      
      </div>
    </>
  );
}

export default SelectedStocks;