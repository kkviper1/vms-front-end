import React ,{Component} from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <img src={process.env.PUBLIC_URL + "/vote.jpg"} width="100%" height="530" />
            </div>

        )
    }
}
    
export default Home;