import {MdLocationPin} from 'react-icons/md'
import {GiPathDistance} from 'react-icons/gi'
import {IoIosPeople} from 'react-icons/io'

const searchData = [
    {
        id: 1,
        icon:<MdLocationPin size={22}/>,
        title: 'Location',
        border:'lg:border-r',
        types:'text',
        placeholders:'Whre are you going ?'
    },
    {
        id: 2,
        icon:<GiPathDistance size={22}/>,
        title: 'Distance',
        border:'lg:border-r',
        types:'number'
    },
    {
        id: 3,
        icon:<IoIosPeople size={22}/>,
        title: 'Max People',
        types:'number'
    },
]

export default searchData