import React from 'react'
import { Link } from 'react-router-dom'

const PageTitle = (props) => {
    return (
        <section className="page-title" style={{background: props.bgColor || 'inherit', color: props.titleColor || 'inherit'}}>
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="breadcumb-wrap">
                            <h2 style={{color: props.titleColor || 'inherit'}}>{props.pageTitle}</h2>
                            <ol style={{color: props.titleColor || 'inherit'}}>
                                <li><Link to="/" style={{color: props.titleColor || 'inherit'}}>home</Link></li>
                                <li style={{color: props.titleColor || 'inherit'}}>{props.pagesub}</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageTitle;