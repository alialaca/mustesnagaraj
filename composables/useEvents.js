import eventsData from '~/data/events.json'

export const useEvents = () => {
  const events = ref(eventsData.events)
    
  const getFirstStartDate = (event) => {
    if (!event.dates || event.dates.length === 0) return null
    return new Date(event.dates[0].startDate)
  }
  
  const getLastEndDate = (event) => {
    if (!event.dates || event.dates.length === 0) return null
    const lastDate = event.dates[event.dates.length - 1]
    return new Date(lastDate.endDate)
  }
  
  const getEventStatus = (event) => {
    if (!event.dates || event.dates.length === 0) return 'completed'

    const now = new Date()
    const firstStart = getFirstStartDate(event)
    const lastEnd = getLastEndDate(event)

    if (now < firstStart) return 'upcoming'
    if (now >= firstStart && now <= lastEnd) return 'progress'
    return 'completed'
  }

  const getUpcomingEvents = () => {
    return events.value.filter(event => {
      const status = getEventStatus(event)
      return status === 'upcoming'
    }).sort((a, b) => getFirstStartDate(a) - getFirstStartDate(b))
  }

  const getCompletedEvents = () => {
    return events.value.filter(event => {
      const status = getEventStatus(event)
      return status === 'completed'
    }).sort((a, b) => getFirstStartDate(b) - getFirstStartDate(a))
  }

  const getInProgressEvents = () => {
    return events.value.filter(event => {
      const status = getEventStatus(event)
      return status === 'progress'
    }).sort((a, b) => getFirstStartDate(a) - getFirstStartDate(b))
  }

  const createSlug = (title) => {
    const turkishChars = {
      'ç': 'c', 'ğ': 'g', 'ı': 'i', 'ö': 'o', 'ş': 's', 'ü': 'u',
      'Ç': 'C', 'Ğ': 'G', 'İ': 'I', 'Ö': 'O', 'Ş': 'S', 'Ü': 'U'
    }

    return title
      .toLowerCase()
      .replace(/[çğıöşüÇĞİÖŞÜ]/g, (char) => turkishChars[char] || char)
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '')
  }

  const getEventById = (id) => {
    return events.value.find(event => event.id === parseInt(id))
  }

  const getEventBySlug = (slug) => {
    return events.value.find(event => event.slug === slug)
  }

  const getEventsByCategory = (category) => {
    return events.value.filter(event =>
      event.categories.includes(category)
    )
  }

  const getEventsByStatus = (status) => {
    if (status === 'all') {
      return events.value.slice().sort((a, b) => getFirstStartDate(b) - getFirstStartDate(a))
    }
    return events.value.filter(event => getEventStatus(event) === status)
      .sort((a, b) => getFirstStartDate(b) - getFirstStartDate(a))
  }

  // Etkinlik tarihlerini kısa formatta göster (27-28 Aralık 2025 gibi)
  const formatEventDateShort = (event) => {
    if (!event.dates || event.dates.length === 0) return ''

    const dates = event.dates.map(d => new Date(d.startDate))
    const firstDate = dates[0]
    const lastDate = dates[dates.length - 1]

    const firstDay = firstDate.getDate()
    const lastDay = lastDate.getDate()
    const month = firstDate.toLocaleDateString('tr-TR', { month: 'long' })
    const year = firstDate.getFullYear()

    // Aynı gün ise sadece tek tarih göster
    if (dates.length === 1 || firstDay === lastDay) {
      return `${firstDay} ${month} ${year}`
    }

    // Farklı günler ise aralık göster
    return `${firstDay}-${lastDay} ${month} ${year}`
  }
  
  const formatEventDate = (event) => {
    if (!event.dates || event.dates.length === 0) return ''

    if (event.dates.length === 1) {
      const date = new Date(event.dates[0].startDate)
      const endTime = new Date(event.dates[0].endDate)
      return date.toLocaleDateString('tr-TR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }) + ` ${date.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })} - ${endTime.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })}`
    }
    
    const firstDate = new Date(event.dates[0].startDate)
    const lastDate = new Date(event.dates[event.dates.length - 1].startDate)
    const startTime = firstDate.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })
    const endTime = new Date(event.dates[0].endDate).toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })

    const firstDay = firstDate.getDate()
    const lastDay = lastDate.getDate()
    const month = firstDate.toLocaleDateString('tr-TR', { month: 'long' })
    const year = firstDate.getFullYear()

    return `${firstDay}-${lastDay} ${month} ${year}, ${startTime} - ${endTime}`
  }

  // Tekil tarih formatı (eski uyumluluk için)
  const formatSingleDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return {
    events,
    getUpcomingEvents,
    getCompletedEvents,
    getInProgressEvents,
    getEventById,
    getEventBySlug,
    getEventsByCategory,
    getEventsByStatus,
    getEventStatus,
    formatEventDate,
    formatEventDateShort,
    formatSingleDate,
    createSlug,
    getFirstStartDate,
    getLastEndDate
  }
}