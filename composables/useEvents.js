import eventsData from '~/data/events.json'

export const useEvents = () => {
  const events = ref(eventsData.events)

  const getUpcomingEvents = () => {
    return events.value.filter(event => {
      const eventDate = new Date(event.date)
      const now = new Date()
      return eventDate > now && event.status === 'upcoming'
    }).sort((a, b) => new Date(a.date) - new Date(b.date))
  }

  const getCompletedEvents = () => {
    return events.value.filter(event => {
      const eventDate = new Date(event.date)
      const now = new Date()
      return eventDate < now || event.status === 'completed'
    }).sort((a, b) => new Date(b.date) - new Date(a.date))
  }

  const getEventById = (id) => {
    return events.value.find(event => event.id === parseInt(id))
  }

  const getEventsByCategory = (category) => {
    return events.value.filter(event => 
      event.categories.includes(category)
    )
  }

  const getEventsByStatus = (status) => {
    if (status === 'all') return events.value
    return events.value.filter(event => event.status === status)
  }

  const formatEventDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const formatEventDateShort = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('tr-TR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })
  }

  return {
    events,
    getUpcomingEvents,
    getCompletedEvents,
    getEventById,
    getEventsByCategory,
    getEventsByStatus,
    formatEventDate,
    formatEventDateShort
  }
}