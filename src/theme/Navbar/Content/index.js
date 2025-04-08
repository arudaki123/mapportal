import React from 'react';
import TreeDialog from '@site/src/components/TreeDialog/TreeDialog';
import OriginalNavbarContent from '@theme-original/Navbar/Content';

export default function NavbarContent(props) {

    return <>
        <OriginalNavbarContent {...props} />
        <TreeDialog />
    </>
}
