import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faMagnifyingGlass,
	faArrowTrendUp,
	faCirclePlus,
	faBullhorn,
} from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {
	return (
		<div className='centered-container'>
			<nav id='navbar'>
				<div className='links'>
					<a href='/profile'>
						<div id='circle'>
							<span>J</span>
						</div>
					</a>
					<a href='/search'>
						<div className='icon'>
							<FontAwesomeIcon icon={faMagnifyingGlass} />
						</div>
						<div className='link-text'>search</div>
					</a>
					<a href='/'>
						<div className='icon'>
							<FontAwesomeIcon icon={faBullhorn} />
						</div>
						<div className='link-text'>latest</div>
					</a>
					<a href='/trending'>
						<div className='icon'>
							<FontAwesomeIcon icon={faArrowTrendUp} />
						</div>
						<div className='link-text'>trending</div>
					</a>
					<a className='alone-link' href='/create'>
						<div className='icon'>
							<FontAwesomeIcon icon={faCirclePlus} />
						</div>
						<div className='link-text'>create</div>
					</a>
				</div>
			</nav>
		</div>
	)
}

export default Navigation
