import React from 'react';
import FilterType from './FilterType/FilterType';
import './LaunchFilters.css';

const LaunchFilters = (props) => {

    const filterCategories = props.filterData.map(category =>
        <FilterType
            filterValues={category.data}
            filerType={category.type}
            key={category.type}
            filterDisplayName={category.displayName}
            activeItem={category.activeItem}
            onFilterApply={props.onFilterApply} />
    )

    return (
        <div className="launch-filters">
            <h2>Filters</h2>
            {filterCategories}
        </div>
    );
}

export default LaunchFilters; 