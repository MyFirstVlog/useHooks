export const infoTodos = {initInput :  [{
                                    id:1,
                                    desc: 'Comer',
                                    done: false
                                },
                                {
                                    id:2,
                                    desc: 'Dormir',
                                    done: false
                                }],
                    actionDef :{
                                type:''
                             },
                    actionAdd :{
                                type:'add'
                             },
                    actionDel: {
                            type:'delete',
                            payload:{id:2}
                            },
                    actionToggle: {
                            type:'toggle',
                            payload:2
                            }
}

