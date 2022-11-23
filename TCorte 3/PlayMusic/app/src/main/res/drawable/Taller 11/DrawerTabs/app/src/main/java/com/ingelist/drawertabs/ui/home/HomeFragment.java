package com.ingelist.drawertabs.ui.home;

import android.os.Bundle;
import android.support.design.widget.TabLayout;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentPagerAdapter;
import android.support.v4.view.PagerAdapter;
import android.support.v4.view.ViewPager;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import android.support.annotation.NonNull;
import android.support.v4.app.Fragment;
import android.arch.lifecycle.ViewModelProvider;

import com.ingelist.drawertabs.FrutasFragment;
import com.ingelist.drawertabs.MenestrasFragment;
import com.ingelist.drawertabs.R;
import com.ingelist.drawertabs.VerdurasFragment;
import com.ingelist.drawertabs.databinding.FragmentHomeBinding;

public class HomeFragment extends Fragment {

    private FragmentHomeBinding binding;
    private ViewPager _pages;
    private TabLayout _tabs;
    private PagerAdapter _adapter;

    public View onCreateView(@NonNull LayoutInflater inflater,
                             ViewGroup container, Bundle savedInstanceState) {
        HomeViewModel homeViewModel =
                new ViewModelProvider(this, new ViewModelProvider.NewInstanceFactory()).get(HomeViewModel.class);

        binding = FragmentHomeBinding.inflate(inflater, container, false);
        View root = binding.getRoot();

        _tabs = root.findViewById(R.id.menutabs);
        _pages = root.findViewById(R.id.pagetabs);

        _tabs.addTab(_tabs.newTab().setIcon(R.drawable.ic_menu_camera).setText("FRUTAS"));
        _tabs.addTab(_tabs.newTab().setIcon(R.drawable.ic_menu_camera).setText("VERDURAS"));
        _tabs.addTab(_tabs.newTab().setIcon(R.drawable.ic_menu_camera).setText("MENESTRAS"));

        _adapter = new PagerAdapter(getActivity().getSupportFragmentManager(),_tabs.getTabCount());
        _pages.setAdapter(_adapter);
        _pages.addOnPageChangeListener(new TabLayout.TabLayoutOnPageChangeListener(_tabs));
        _tabs.setOnTabSelectedListener(new TabLayout.OnTabSelectedListener() {
            @Override
            public void onTabSelected(TabLayout.Tab tab) {
                _pages.setCurrentItem(tab.getPosition());
            }

            @Override
            public void onTabUnselected(TabLayout.Tab tab) {

            }

            @Override
            public void onTabReselected(TabLayout.Tab tab) {

            }
        });

        return root;
    }

    public class PagerAdapter extends FragmentPagerAdapter{

        int _numerodetabs;
        public PagerAdapter(FragmentManager fm, int numerodetabs) {
            super(fm);
            this._numerodetabs = numerodetabs;
        }

        @Override
        public Fragment getItem(int i) {
            Fragment fragment = null;
            switch (i){
                case 0: fragment = new FrutasFragment();
                case 1: fragment = new VerdurasFragment();
                case 2: fragment = new MenestrasFragment();
                    break;
            }
            return fragment;
        }

        @Override
        public int getCount() {
            return _numerodetabs;
        }
    }

    @Override
    public void onDestroyView() {
        super.onDestroyView();
        binding = null;
    }
}