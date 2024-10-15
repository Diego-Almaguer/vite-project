import { create } from 'zustand';
import useProfile from '../hooks/useProfile';
import GetProfile from '../services/getProfile';

const useBearStore = create((set) => ({
  profile: [],
  setProfile: (newProfile) => set({ profile: newProfile }),

  loadProfile: async(userId) => {
    try {
      const profile = await GetProfile({userId});
      set(profile );
    } catch (error) {
      console.error('Error loading profile:', error);
    }
  },

  removeProfile: () => set({ profile: null }),
}));

export default useBearStore;