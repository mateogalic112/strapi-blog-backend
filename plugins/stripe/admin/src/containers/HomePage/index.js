/*
 *
 * HomePage
 *
 */

import React, { useState, useEffect, memo } from 'react';
// import PropTypes from 'prop-types';
import { request } from 'strapi-helper-plugin';
import pluginId from '../../pluginId';

const HomePage = () => {
	const [pk, setPk] = useState('');

	useEffect(() => {
		const loadPk = async () => {
			try {
				const res = await request(`/${pluginId}/settings`);
				const { pk } = await res;
				setPk(pk);
			} catch (error) {
				console.log('error', error.message);
			}
		};
		loadPk();
	}, []);

	const updatePk = async (e) => {
		e.preventDefault();

		try {
			const res = await request(`/${pluginId}/settings`, {
				method: 'POST',
				body: { pk },
			});
		} catch (error) {
			console.log('error', error);
		}
	};

	return (
		<div>
			<h1>Stripe</h1>
			<p>Save your private key here</p>
			<form onSubmit={updatePk}>
				<input type="text" value={pk} onChange={(e) => setPk(e.target.value)} />
				<button>Submit</button>
			</form>
		</div>
	);
};

export default memo(HomePage);
