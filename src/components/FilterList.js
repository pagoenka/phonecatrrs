import React, {Component} from 'react';

export default class FilterList extends Component {
    render() {
        return (
            <div className="col-sm-3 col-md-3 col-lg-3">
                <form>
                    <div className="form-group">
                        <label>Search:</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Sort By:</label>
                        <select className="form-control">
                            <option>Alphabetically</option>
                            <option>Newest</option>
                        </select>
                    </div>
                </form>
            </div>
        )
    };
}