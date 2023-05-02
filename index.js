fetch('https://www.boredapi.com/api/activity')
  .then(response => response.json())
  .then(data => displayData(data));

const displayData = (data) => {
  const ul = document.createElement('ul');
  const li = document.createElement('li')
  li.innerHTML = data.activity;
  ul.append(li);
  document.body.append(ul);
}