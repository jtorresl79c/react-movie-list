// import React, { Component } from 'react';

// export default class tableHeader extends Component {
//     render() {
//         return (
//             <thead>
//                 <tr>
//                     <th scope="col" className='pointer' onClick={() => raiseSort('title')}>Title {this.state.arrowIcon.title === 'title' ? <i className={`bi bi-caret-${this.state.arrowIcon.direction}-square-fill`}></i> : null}</th>
//                     <th scope="col" className='pointer' onClick={() => raiseSort('genre.name')}>Genre {this.state.arrowIcon.title === 'genre.name' ? <i className={`bi bi-caret-${this.state.arrowIcon.direction}-square-fill`}></i> : null}</th>
//                     <th scope="col" className='pointer' onClick={() => raiseSort('numberInStock')}>Stock  {this.state.arrowIcon.title === 'numberInStock' ? <i className={`bi bi-caret-${this.state.arrowIcon.direction}-square-fill`}></i> : null}</th>
//                     <th scope="col" className='pointer' onClick={() => raiseSort('dailyRentalRate')}>Rate  {this.state.arrowIcon.title === 'dailyRentalRate' ? <i className={`bi bi-caret-${this.state.arrowIcon.direction}-square-fill`}></i> : null}</th>
//                     <th scope="col" className=''></th>
//                     <th scope="col" className=''></th>
//                 </tr>
//             </thead>
//         )
//     }
// }