/*
 *
 * HomePage
 *
 */

import React, { useState, useEffect, memo } from 'react';
// import PropTypes from 'prop-types';
import { request } from 'strapi-helper-plugin';
import pluginId from '../../pluginId';

import { Block, Container } from '../../components/StrapiStyled';
import { InputText, Button, Padded } from '@buffetjs/core';

const HomePage = () => {
	const [pk, setPk] = useState('');

	useEffect(() => {
		const loadPk = async () => {
			try {
				const res = await request(`/${pluginId}/settings`);
				const { pk } = await res;
				setPk(pk);
				strapi.notification.success('Success');
			} catch (error) {
				strapi.notification.error(error.toString());
			}
		};
		loadPk();
	}, []);

	const updatePk = async (e) => {
		e.preventDefault();
		strapi.lockApp();
		try {
			const res = await request(`/${pluginId}/settings`, {
				method: 'POST',
				body: { pk },
			});
			strapi.notification.success('Success');
		} catch (error) {
			strapi.notification.error(error.toString());
		}
		strapi.unlockApp();
	};

	return (
		<div className="row">
			<div className="col-md-12">
				<Container>
					<Block>
						<h1>Stripe</h1>
						<p>Save your private key here</p>
						<form onSubmit={updatePk}>
							<InputText
								type="text"
								name="input"
								placeholder="Stripe PK"
								value={pk}
								onChange={(e) => setPk(e.target.value)}
							/>
							<Padded top>
								<Button color="primary" label="Submit" type="submit" />
							</Padded>
						</form>
					</Block>
				</Container>
			</div>
		</div>
	);
};

export default memo(HomePage);
