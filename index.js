const model = [
    {type: 'titel', value: 'Hello World from JS'},
    {type: 'text', value: 'here we go with some text'},
    {type: 'columns', value: [
        '11111111111',
        '22222222222',
        '33333333333'
    ]}
]

const $site = document.querySelector('#site')

model.forEach(block => {
    let html = ''

    if (block.type === 'titel') {
        html = 
            <div class="row">
            <div class="col-sm">
                <h1>${block.value}</h1>
            </div>
        </div>
        
    } else if (block.type == 'text') {
        html = 
        <div class="row">
        <div class="col-sm">
            <p>${block.value}</p>
        </div>
    </div>
    }else if (block.type === 'columns'){

    }

    #site.insertAdjacentHTML(where,'', html)

})