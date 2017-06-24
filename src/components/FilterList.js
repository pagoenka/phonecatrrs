import React, {Component} from 'react';

export default class FilterList extends Component {
    render() {
        const { onSearchPhone, onSortPhone } = this.props;
        return (
            <div className="col-sm-3 col-md-3 col-lg-3">
                <form>
                    <div className="form-group">
                        <label>Search:</label>
                        <input type="text" className="form-control" name='searchQuery'
                               onChange={onSearchPhone}/>
                    </div>
                    <div className="form-group">
                        <label>Sort By:</label>
                        <select className="form-control" onChange={onSortPhone}>
                            <option value='alphabetically'>Alphabetically</option>
                            <option value='newest'>Newest</option>
                        </select>
                    </div>
                </form>
            </div>
        )
    };
}