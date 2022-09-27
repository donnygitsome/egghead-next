import noop from 'utils/noop'
import {identify} from './identify'
import {
  activityLogIn,
  activityInternalLinkClick,
  activityExternalLinkClick,
  activityCtaClick,
  engagementSearchedWithQuery,
  engagementWatchedTalk,
  engagementStartCourse,
  engagementCourseProgress,
  engagementCompletedCourse,
  engagementCompletedLesson,
  engagementClickedWatchedLessonAgain,
  engagementListenPodcast,
  engagementReadArticle,
} from './events'

const events = {
  activityLogIn,
  activityInternalLinkClick,
  activityExternalLinkClick,
  activityCtaClick,
  engagementSearchedWithQuery,
  engagementWatchedTalk,
  engagementStartCourse,
  engagementCourseProgress,
  engagementCompletedCourse,
  engagementCompletedLesson,
  engagementClickedWatchedLessonAgain,
  engagementListenPodcast,
  engagementReadArticle,
}

export const track = (event: string, paramsOrCallback?: any, callback?: any) =>
  noop

const analytics = {
  track,
  identify,
  events,
}

export default analytics