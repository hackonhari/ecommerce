import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.components';
import {connect} from 'react-redux';
import {selectDirectorySelections} from '../../redux/directory/directory.selector';
import {createStructuredSelector} from 'reselect'

class Directory extends React.Component{
render(){
    return(
        <div className="directory-menu">
        {
            this.props.directorySections.map(({id,...otherSectionsProps})=>(
                <MenuItem key={id}  {...otherSectionsProps}/>
            ))
        }
        </div>
    )
}

}

const mapStateToProps=createStructuredSelector({
    directorySections:selectDirectorySelections
})

export default connect(mapStateToProps)(Directory);