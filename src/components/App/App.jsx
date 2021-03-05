import React, {useState, useEffect} from 'react'
import {Wrapper, Container} from './App.styles'
import AppHeader from '../AppHeader'
import AppContainer from '../AppContainer/AppContainer'
import LineChart from '../../shared/LineChart'
import ShoppingList from '../ShoppingList'
import extractPercentage from '../../utils/extractPercentage'
import { selectAllProductsSelected, selectTotalAllProductsSelected } from '../../store/Products/Products.selectors'
import { useDispatch, useSelector } from 'react-redux'
import { toggleProduct} from '../../store/Products/Products.actions'


function App(){

    const selectedProducts = useSelector(selectAllProductsSelected)
    const totalPrice = useSelector(selectTotalAllProductsSelected)
    
    const dispath = useDispatch();
    
    function handleOnClick(id){
        dispath(toggleProduct(id))
    }

    return <Wrapper>
        <Container>
            <AppHeader />
            <AppContainer 
                left = {
                    <div> 
                        <ShoppingList 
                            title = "Sua lista de compras"
                            onClick={handleOnClick}
                            displayOnlySelected = {false}/>
                    </div>
                }
                middle = { 
                    <div> 
                        <ShoppingList 
                            title = "Lista de compra"
                            onClick={handleOnClick}
                            displayOnlySelected = {true}/>
                    </div>
                }
                right = { 
                    <div> 
                        Estatísticas
                        <LineChart 
                            color="#A9f" 
                            title="saudavel" 
                            percentage= {extractPercentage(
                                selectedProducts.length,
                                selectedProducts.filter(p => p.tags.includes('healthy')).length
                            )} />
                        <LineChart 
                            color="#A9f" 
                            title="nao tao saudavel" 
                            percentage= {extractPercentage(
                                selectedProducts.length,
                                selectedProducts.filter(p => p.tags.includes('junk')).length
                            )} />
                        <LineChart 
                            color="#A9f" 
                            title="limpeza" 
                            percentage= {extractPercentage(
                                selectedProducts.length,
                                selectedProducts.filter(p => p.tags.includes('cleaning')).length
                            )} />
                        <LineChart 
                            color="#A9f" 
                            title="outros"
                            percentage= {extractPercentage(
                                selectedProducts.length,
                                selectedProducts.filter(p => p.tags.includes('others')).length
                            )} />
                    
                    <div style={{marginTop: 12}}>
                        <h2 style={{fontWeight: 400, fontSize: 12, color: '#00364A'}}>
                            previsão de gastos
                        </h2>
                        <div style={{fontSize: 24}}>
                            {
                                totalPrice.toLocaleString('pt-br', {
                                    minimumFractionDigits: 2,
                                    style: 'currency',
                                    currency: 'BRL'
                                })
                            }
                        </div>

                    </div>
                    
                    </div>
                }
            /> 
        </Container>
    </Wrapper>
}

export default App