import React from 'react'
import styled from 'styled-components'
import quicBanner from '../../assets/img/quic-banner.png'
import quicLogo from '../../assets/img/quic.png'
import Button from '../../components/Button'
import Container from '../../components/Container'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import Spacer from '../../components/Spacer'
import Balances from './components/Balances'


const Home: React.FC = () => {
	return (
		<Page>
			<PageHeader
				icon={quicLogo}
				title="its like Bao but Quicker"
				subtitle="Stake Sushiswap and Uniswap LP tokens to earn QUIC!"
			/>
			<StyledInfo>
				Be sure to read <a href="https://docs.quic.finance">docs.quic.finance</a>{' '}
				before using the pools so you are familiar with protocol risks and
				fees!
			</StyledInfo>
			<Spacer size="md" />
			<StyledInfo>
				Please note this is the mainnet version of Quic Finance
			</StyledInfo>
			<Spacer size="md" />
			<Container>
				<Balances />
			</Container>
			<Spacer size="lg" />
			<div
				style={{
					margin: '0 auto',
				}}
			>
				<Button text="🔪 See the Menu" to="/farms" variant="secondary" />
			</div>
			<Spacer size="lg" />
			<StyledInfo>
				🏆<b>Pro Tip</b>: QUIC-ETH UNIV2 has the biggest weight of all pools. Check
                them <a href="https://docs.quic.finance/pool-weights">here</a>{'.'}
            </StyledInfo>
			<Spacer size="md" />
			<StyledInfo>
				💲<b>Pro Tip</b>: The affiliate links from the "Buy X" buttons generate
				revenue for the Quic Treasury which Quic holders own. <br />
				Even if you already trade at these exchanges consider creating a new
				account to help grow the protocol.
			</StyledInfo>
			<Spacer size="md" />
			<StyledInfo>
				❗️<b>Disclaimer</b>: QUIC is currently in alpha and has a one-person
				engineering team. <br />
				While we are scaling, there may be higher than normal risk of bugs and
				we may be slower in being able to respond to them.
				<br />
				Please partake accordingly.
				<br />
				The service is provided as-is.
			</StyledInfo>
		</Page>
	)
}

const StyledInfo = styled.h3`
	color: ${(props) => props.theme.color.grey[500]};
	font-size: 16px;
	font-weight: 400;
	margin: 0;
	padding: 0;
	text-align: center;

	> b {
		color: ${(props) => props.theme.color.grey[600]};
	}
`

export default Home
