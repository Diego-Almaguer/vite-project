import { create } from 'zustand';
import useProfile from '../hooks/useProfile';
import GetProfile from '../services/getProfile';

const useBearStore = create((set) => ({
  profile: {},
  user:{},
  userId:0,
  
  setUserId : () => set((state)=>({userId: state})),
  setProfile: (newProfile) => set({ profile: newProfile }),

  loadProfile: async(userId) => {
    try {
      const profile = await GetProfile({userId});
      const {user}=await GetProfile({userId})
      
      set({user:user});
      set({profile:profile} );
    } catch (error) {
      console.error('Error loading profile:', error);
    }
  },

  removeProfile: () => set({ profile: {} }),
}));

export default useBearStore;