import React from 'react'
import './UserRole.css'

function UserRole({role}) {
    const roleDescriptions = {
        'admin': "You have full access.",
        'editor': "You can edit content.",
        'viewer': "You can view content only.",
    };

    let message = "";

    switch (role) {
        case 'admin':
            message = roleDescriptions['admin'];
            break;
        case 'editor':
            message = roleDescriptions['editor'];
            break;
        case 'viewer':
            message = roleDescriptions['viewer'];
            break;
        default:
            message = "Unknown role";
            break;
    }

    return (
        <div>{message}</div>
    )
}

export default UserRole