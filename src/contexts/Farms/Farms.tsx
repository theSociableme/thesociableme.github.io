import React, { useCallback, useEffect, useState } from 'react'

import { useWallet } from 'use-wallet'
import useBao from '../../hooks/useQuic'

import { bnToDec } from '../../utils'
import { getMasterChefContract, getEarned } from '../../quic/utils'
import { getFarms } from '../../quic/utils'

import Context from './context'
import { Farm } from './types'

const Farms: React.FC = ({ children }) => {
	const [unharvested, setUnharvested] = useState(0)

	const bao = useBao()
	const { account } = useWallet()

	const farms = getFarms(bao)

	return (
		<Context.Provider
			value={{
				farms,
				unharvested,
			}}
		>
			{children}
		</Context.Provider>
	)
}

export default Farms
