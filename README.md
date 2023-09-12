## Acesso aos endpoints

### /device
- **GET**: Para listar todos os devices acessar a URL com o path `/device`.
- **GET**: Para listar os logs dos devices, filtrando pela data acessar a URL com o path `/device` informando ambos ou pelo menos um dos query parameters `since` e `until`, ambos devem estar no formato ISO. Ex: `2023-01-15`.
- **POST**: Para criar novos devices acessar a URL com o path `/device` informando no body da request um json no seguinte formato:
```json
[
    {
        "deviceUUID": "0000ABCD",
        "signals": [
            {
                "UUID": "temperature",
                "recovered": true,
                "logs": [
                    {
                        "date": "2023-01-15T08:15:00.000Z",
                        "value": 20
                    },
                    {
                        "date": "2023-01-15T09:15:00.000Z",
                        "value": 22
                    },
                    {
                        "date": "2023-01-15T10:15:00.000Z",
                        "value": 23
                    },
                    {
                        "date": "2023-01-15T11:15:00.000Z",
                        "value": 25
                    },
                    {
                        "date": "2023-01-15T12:15:00.000Z",
                        "value": 28
                    },
                    {
                        "date": "2023-01-15T13:15:00.000Z",
                        "value": 29
                    }
                ]
            }
        ]
    }
]

```
