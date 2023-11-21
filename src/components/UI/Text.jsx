import './style/text.css';

export const BannerText = ({children}) =>{
    return (
        <h1 className='bannerText'>
            {children}
        </h1>
    )
}

export const TitleText = ({children}) =>{
    return (
        <h1 className='titleText'>
            {children}
        </h1>
    )
}

export const ParagraphText = ({children}) =>{
    return (
        <h1 className='paragraphText'>
            {children}
        </h1>
    )
}