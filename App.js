import React, { Component } from 'react';
import { Linking } from 'react-native';
import { Container, Header, Content,Icon, Button,Left, Text, Card, CardItem } from 'native-base';
export default class ButtonThemeExample extends Component {
  render() {
    return (
      <Container>
        <Header
         style={{height:80}} >
         <Left style={{paddingTop:20}}>
	       <Text style={{color:'white',fontWeight:'bold'}}>Linking.....</Text>   	
	       </Left>
	  
       </Header>
        <Content>
          <Card transparent>            
            <CardItem>
                <Button style={{width:'100%',justifyContent:'center'}}
                 onPress={()=>{Linking.openURL('https://blog.pusher.com/build-rest-api-laravel-api-resources/')}}>
                  <Text>API resources</Text>
                </Button>
            </CardItem>            
            <CardItem>
                <Button style={{width:'100%',justifyContent:'center'}} 
                onPress={()=>{Linking.openURL('https://facebook.github.io/react-native/docs/getting-started.html')}}>
                  <Text>react native</Text>
                </Button>
            </CardItem>
            <CardItem>
                <Button style={{width:'100%',justifyContent:'center'}} onPress={()=>{Linking.openURL('https://docs.nativebase.io/')}}>
                  <Text>native base</Text>
                </Button>
            </CardItem>
            <CardItem>
                <Button style={{width:'100%',justifyContent:'center'}} onPress={()=>{Linking.openURL('https://ionicframework.com/docs/ionicons/')}}>
                  <Text>reference ionicon Icons</Text>
                </Button>
            </CardItem>
            <CardItem>
                <Button style={{width:'100%',justifyContent:'center'}} 
                onPress={()=>{Linking.openURL('https://oblador.github.io/react-native-vector-icons/')}}>
                  <Text>reference vector Icons</Text>
                </Button>
            </CardItem>
            <CardItem>
                <Button style={{width:'100%',justifyContent:'center'}} 
                onPress={()=>{Linking.openURL('https://hdtuto.com/article/laravel-56-adminlte-bootstrap-theme-installation-example')}}>
                  <Text>adminlte example</Text>
                </Button>
            </CardItem>           
            <CardItem>
                <Button style={{width:'100%',justifyContent:'center'}} 
                onPress={()=>{Linking.openURL('https://itsolutionstuff.com/category/')}}>
                  <Text>IT solution</Text>
                </Button>
            </CardItem>                      
          </Card>
        </Content>
      </Container>
    );
  }
}