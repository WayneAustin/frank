/**
 * Created by Wayne on 16/10/2014.
 */
/** @jsx React.DOM */

var ImportsList = React.createClass({
   render: function() {
       var imports = this.props.data.map(function(import) {
            return (
                <ImportItem data="import"></ImportItem>
                )
       });
       return (
            {imports}
           )
   }
});
var ImportItem = React.createClass({
    render: function() {
        return (
            <li className="list-item">
                <div>
                    <p><strong>Item name</strong></p>
                    <p>Item description</p>
                    <p>Item status</p>
                    <p>Start date</p>
                </div>
            </li>
            )
    }
});