import React, {useState, useEffect} from 'react'
import {Wrapper, Container} from './App.styles'
import AppHeader from '../AppHeader'
import AppContainer from '../AppContainer/AppContainer'
import LineChart from '../../shared/LineChart'
import ShoppingList from '../ShoppingList'
import productsMock from '../../mocks/products.json'
import extractPercentage from '../../utils/extractPercentage'


function App(){

    const [products, setProducts] = useState(productsMock.products)
    const [selectedProducts, setSelectedProducts] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    
    useEffect(() => {
        const newProducts = products
            .filter(element => element.checked)

        setSelectedProducts(newProducts)
    }, [products])

    useEffect(() => {
        const total = selectedProducts
            .map(p => p.price)
            .reduce((a,b) => a + b, 0);

        setTotalPrice(total)
    }, [selectedProducts])

    function handleOnClick(id){
        setProducts(products.map((element) => element.id === id ? { ...element, checked: !element.checked} : element))
    }

    return <Wrapper>
        <Container>
            <AppHeader />
            <AppContainer 
                left = {
                    <div> 
                        <ShoppingList 
                            title = "Sua lista de compras"
                            products={products}
                            onClick={handleOnClick}/>
                    </div>
                }
                middle = { 
                    <div> 
                        <ShoppingList 
                            title = "Lista de compra"
                            products={selectedProducts}
                            onClick={handleOnClick}/>
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