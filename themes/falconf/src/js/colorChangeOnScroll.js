const SECTIONS = document.querySelectorAll('.scroll-class')
const body = document.body

const getColorChangeBorder = (offsetTop, sectionHeight) => {
    return offsetTop + sectionHeight / 2
}

const isOnTopSection = scrolledFromTop => {
    return scrolledFromTop < SECTIONS[0].offsetHeight / 2
}

const isScrolledToBottom = (element, scrolledFromTop) => {
    const bottom = element.offsetTop + element.offsetHeight
    return scrolledFromTop === bottom - window.innerHeight 
}

const getClassName = id => `active-${id}`

const resolveClass = (currentElement, index, scrolledFromTop) => {
    const isFirst = currentElement.offsetTop === 0

    if (isFirst && isOnTopSection(scrolledFromTop)) {
        return ''
    }

    const isLast = index === SECTIONS.length - 1

    if (isLast) {
        if (isScrolledToBottom(currentElement, scrolledFromTop))
            return getClassName(currentElement.id)
    } else {
        const top = getColorChangeBorder(currentElement.offsetTop, currentElement.offsetHeight)
        const nextElement = SECTIONS[index + 1]
        const bottom = getColorChangeBorder(nextElement.offsetTop, nextElement.offsetHeight)
        if (scrolledFromTop >= top && scrolledFromTop < bottom) {
            return getClassName(nextElement.id)
        }        
    }
}

const handleScroll = () => {
    const scrolledFromTop = window.scrollY
    SECTIONS.forEach((currentElement, index) => {
        const newClass = resolveClass(currentElement, index, scrolledFromTop)
        if(newClass !== undefined) {
            body.className = newClass
        }
    })
}

window.addEventListener('scroll', handleScroll)
