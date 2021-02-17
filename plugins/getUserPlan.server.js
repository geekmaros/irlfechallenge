export default async ({store, params}) =>  {

    await  store.dispatch('events/getUserAndPlans', {
      username: params.username,
    })
}
