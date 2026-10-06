import { useState } from "react";
import { motion } from "framer-motion";
import { useSfx } from "utils/use-sfx";
import { cn } from "utils/cn";

const Tab = ({ index, tab, activeTab, handleOnClick, setIsHovering }) => {
  return (
    <button
      onClick={() => handleOnClick(index)}
      aria-pressed={activeTab.value === tab.value}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative shrink-0 min-h-[44px] px-4 py-2 rounded-full cursor-pointer"
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {activeTab.value === tab.value && (
        <motion.div
          layoutId="clickedbutton"
          transition={{ type: "spring", bounce: 0.3, duration: 0.7 }}
          className="absolute inset-0 bg-gray-dark-2 rounded-full"
        />
      )}

      <span
        className={cn(
          "relative text-white top-[3px] link",
          tab.value !== activeTab.value && "hover:text-gray-light-3"
        )}
      >
        {tab.title}
      </span>
    </button>
  );
};

const TabsContent = ({ tabs, isHovering }) => {
  return (
    <div className="relative w-full mt-12 md:mt-20">
      {tabs.map((tab, index) => {
        return (
          <motion.div
            key={tab.value}
            aria-hidden={index !== 0}
            inert={index !== 0 ? "" : undefined}
            layoutId={tab.value}
            style={{
              scale: 1 - index * 0.1,
              top: isHovering ? index * -50 : 0,
              zIndex: -index,
              opacity: index < 3 ? 1 - index * 0.1 : 0,
            }}
            animate={{
              y: tab.value === tabs[0].value ? [0, 40, 0] : 0,
            }}
            className={`w-full ${index === 0 ? "relative" : "absolute top-0 left-0 pointer-events-none"}`}
          >
            {tab.content}
          </motion.div>
        );
      })}
    </div>
  );
};

const Tabs = ({ tabItems }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [tabs, setTabs] = useState(tabItems);
  const [activeTab, setActiveTab] = useState(tabItems[0]);
  const sfx = useSfx();

  const handleOnClick = (index) => {
    const updatedTabs = [...tabItems];
    const selectedTab = updatedTabs.splice(index, 1);
    updatedTabs.unshift(selectedTab[0]);
    setTabs(updatedTabs);
    setActiveTab(updatedTabs[0]);
    sfx.play("tab-switch");
  };

  return (
    <div className="staggered-reveal">
      <div className="pt-12 flex flex-row justify-start sm:justify-center items-center gap-2 [perspective:1000px] relative overflow-x-auto max-w-full w-full">
        {tabItems.map((tab, index) => (
          <Tab
            key={tab.title}
            index={index}
            tab={tab}
            activeTab={activeTab}
            handleOnClick={handleOnClick}
            setIsHovering={setIsHovering}
          />
        ))}
      </div>
      <TabsContent
        key={activeTab.value}
        tabs={tabs}
        activeTab={activeTab}
        isHovering={isHovering}
      />
    </div>
  );
};

export default Tabs;
