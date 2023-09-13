export function handleItems(container, item) {
  const li = container,
        arrayLi = [...li]
  
  li.forEach(items => items.classList.remove('active'))

  if (!arrayLi[item].classList.add('active'))
    arrayLi[item].classList.add('active')
}
