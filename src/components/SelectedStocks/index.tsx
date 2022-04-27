import { faPlus, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useGraphContext } from '../../contexts/GraphContext';
import { SearchContextProvider, useSearchContext } from '../../contexts/SearchContext';
import { StockCandle } from '../../typings/stock';
import Badge from '../Badge';
import SearchBar from '../SearchBar';
import SelectInterval from '../SelectInterval';

interface SelectedStocksProps {

}

interface RemoveBadgeProps {
  text: string,
  loading: boolean,
  color: 'action' | 'danger',
  onRemove: () => void
}

const RemoveBadge = ({
  text,
  loading,
  onRemove
} : RemoveBadgeProps) => {
  return (
    <Badge color={"action"}>
      {text}
      {!loading && <span onClick={onRemove} className="badge-remove" />}
      {loading && <FontAwesomeIcon icon={faSpinner} spin style={{
        marginLeft: '4px'
      }} />}
    </Badge>
  )
}

const SelectedStocks: React.FC = () => {
  const {graphs, removeGraph, clearGraphs} = useGraphContext();
  
  return (
    <>
      
      <div className="selected-stocks">
        <div className="selected-stocks-badges">
          <Badge onClick={clearGraphs} color='danger'>
            LIMPAR
          </Badge>
          {graphs.map((badge) => {
            return (
              <RemoveBadge key={badge.name} loading={badge.loading} color={"action"} text={badge.name} onRemove={() => {removeGraph(badge.name)}} />
            )
          })}
        </div>
        <SelectInterval />   
      </div>
    </>
  );
}

export default SelectedStocks;