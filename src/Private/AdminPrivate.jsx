import React, { useContext } from 'react';
import SetAdmin from '../hooks/SetAdmin';
import { AuthContext } from '../Provider/AuthProbider';
import { Navigate } from 'react-router-dom';

const AdminPrivate = ({children}) => {
    const [isAdmin,isAdminLoading]=SetAdmin()
    const { user, loading } = useContext(AuthContext);
    if (loading||isAdminLoading) {
        return <>
        <progress className="progress w-56"></progress>
        </>
    }
     if (user||isAdmin) {
        return children
     }
     return <Navigate to="/" replace></Navigate>
};

export default AdminPrivate;