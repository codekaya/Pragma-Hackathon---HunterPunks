import { useDispatch, useSelector } from 'react-redux'

import AttackInput from '../attack-input'
import Character from '../character'
import InfoTooltip from '../info-tooltip'
import { hunt, hide, getTokenIdOfPlayer } from '../../web3/functions'
import web3Obj from '../../web3/index'
import { connectWallet } from '../../web3/Wallet'
import { NFT_CONTRACT_ADDR } from '../../../utils/constants'
import { ethers } from 'ethers'
import Button from '../../styles/button'

const GameArea = () => {
  const gameState = useSelector((state) => state.game)

  const handleHuntClick = async () => {
    //console.log(web3Obj.nftContract);
    //console.log(
    //await getTokenIdOfPlayer(web3Obj.nftContract, "0x7F4940A7363e11f0f7C34e430338ed95A1D7a7bf")
    //);
  }

  return (
    <div className='relative w-full '>
      <div className='wrapper'>
        <div className='cardBgStyledEmpty' />
        <div className='game-area-content'>
          <div className='game-area-section-group'>
            <div className='game-area-section'>
              <div className='game-area-section-title'>Hunting</div>
              <div className='game-area-section-players'>
                {gameState?.players_by_states?.hunting?.map((player) => (
                  <Character
                    key={'character_' + player?.player_id}
                    character_image={player?.character_image}
                    player_data={player}
                  />
                ))}
              </div>
            </div>
            <div className='game-area-section'>
              <div className='game-area-section-title'>Hiding</div>
              <div className='game-area-section-players'>
                {gameState?.players_by_states?.hiding?.map((player) => (
                  <Character
                    key={'character_' + player?.player_id}
                    character_image={player?.character_image}
                    player_data={player}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className='game-area-section-group'>
            <div className='game-area-section'>
              <div className='game-area-section-title'>Playing</div>
              <div className='game-area-section-players'>
                {gameState?.players_by_states?.playing?.map((player) => (
                  <Character
                    key={'character_' + player?.player_id}
                    character_image={player?.character_image}
                    player_data={player}
                  />
                ))}
              </div>
            </div>
            <div className='game-area-section'>
              <div className='game-area-section-title'>Attacking</div>
              <div className='game-area-section-players'>
                {gameState?.players_by_states?.attacking?.map((player) => (
                  <Character
                    key={'character_' + player?.player_id}
                    character_image={player?.character_image}
                    player_data={player}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-[15px] flex gap-[17px]'>
        <Button onClick={handleHuntClick}>
          <InfoTooltip content='hunt' position={{ x: 'right' }} />
          Hunt!
        </Button>
        <Button>
          <InfoTooltip content='hide' position={{ x: 'right' }} />
          Hide!
        </Button>
      </div>

      <AttackInput />
    </div>
  )
}

export default GameArea
