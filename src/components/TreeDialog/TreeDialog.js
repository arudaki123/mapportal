import React, { useState } from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import DocsTreeView from '@site/src/components/DocsTreeView/DocsTreeView';
import Button from '@site/src/components/Button';
import './TreeDialog.css';
import Link from '@docusaurus/Link';

export default function TreeDialog() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDialog = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Button trên header */}
            {process?.env?.DEVELOPMENT && (
            <button className={'button button--outline button--secondary treeButton br-2'} href='/admin' onClick={toggleDialog}>
                📂 Editing
            </button>)}

            {/* Dialog */}
            {isOpen && (
                <div className={'dialogOverlay'} onClick={toggleDialog}>
                    <div className={'dialogContent'} onClick={(e) => e.stopPropagation()}>
                        <h3 className={'dialogTitle'}><Translate>Documentation Tree</Translate></h3>
                        <Link to={'/admin/#/collections/doc/~'} target="_blank" className={'dialogLink'}>{'Editing by admin'}</Link>
                        <DocsTreeView />
                        <div className='footerDialog'>
                            <button className={'closeButton'} onClick={toggleDialog}>
                                Close
                            </button>
                        </div>
                    </div>
                </div >
            )
            }
        </>
    );
}
