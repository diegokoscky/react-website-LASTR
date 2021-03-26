import React from 'react';
import {Button} from './Button';
import './Pricing.scss';
import {FaFire} from 'react-icons/fa';
import {BsXDiamondFill} from 'react-icons/bs';
import {GiCrystalize} from 'react-icons/gi';
import {IconContext} from 'react-icons/lib';
import {Link} from 'react-router-dom';

function Pricing() {
    return (
        <IconContext.Provider value={
            {
                color: '#fff',
                size: 64
            }
        }>
            <div className="pricing__section">
                <div className="pricing__wrapper">
                    <h1 className="pricing__heading">
                        Preços
                    </h1>
                    <div className="pricing__container">
                        <Link to="sign-up" className="pricing__container-card">
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                    <FaFire/>
                                </div>
                                <h3>Inicial</h3>
                                <h4>R$ 36,99</h4>
                                <p>por mês</p>
                                <ul className="pricing__container-features">
                                    <li>100 Transações</li>
                                    <li>2% de Cashback</li>
                                    <li>R$ 10.000,00 de limite</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonColor='primary'>
                                    Escolher
                                </Button>
                            </div>
                        </Link>
                        <Link to='/sign-up' className='pricing__container-card'>
                            <div className='pricing__container-cardInfo'>
                                <div className='icon'>
                                    <BsXDiamondFill/>
                                </div>
                                <h3>Ouro</h3>
                                <h4>R$ 69,99</h4>
                                <p>por mês</p>
                                <ul className='pricing__container-features'>
                                    <li>1.000 Transações</li>
                                    <li>3,5% de Cashback</li>
                                    <li>R$ 100.000,00 de limite</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonColor='blue'>
                                    Escolher
                                </Button>
                            </div>
                        </Link>
                        <Link to='/sign-up' className='pricing__container-card'>
                            <div className='pricing__container-cardInfo'>
                                <div className='icon'>
                                    <GiCrystalize/>
                                </div>
                                <h3>Diamante</h3>
                                <h4>R$ 139,99</h4>
                                <p>por mês</p>
                                <ul className='pricing__container-features'>
                                    <li>Transações ilimitadas</li>
                                    <li>5% de Cashback</li>
                                    <li>Gastos ilimitados</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonColor='primary'>
                                    Escolher
                                </Button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </IconContext.Provider>
    )
}

export default Pricing
