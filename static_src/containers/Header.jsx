import React from 'react';
import PropTypes from "prop-types";
import Avatar from 'material-ui/svg-icons/action/account-circle';


export default class Header extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
    };

    static defaultProps = {
        chatId: 1,
    };

    render() {
        return (
            <div className="header">
                <div>Чат { this.props.chatId }</div>
                <div style={ {
                    marginRight: '10px',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                } }>
                    <Avatar color='white' style={ { marginRight: '10px' } } />
                    <span>Geek</span>
                </div>
            </div>
        )
    }
}